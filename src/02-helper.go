package helper

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
)

func WriteJSON(w http.ResponseWriter, status int, data interface{}) error {

	var out []byte

	jsonBytes, err := json.Marshal(data)
	if err != nil {
		return err
	}
	out = jsonBytes

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)

	_, err = w.Write(out)
	if err != nil {
		return err
	}
	return nil
}

func ReadJSON(w http.ResponseWriter, r *http.Request, data interface{}) error {
	maxBytes := 1024 * 1024 // 1MB

	r.Body = http.MaxBytesReader(w, r.Body, int64(maxBytes))
	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()

	err := dec.Decode(data)
	if err != nil {
		return err
	}

	// make sure only one JSON value in payload
	err = dec.Decode(&struct{}{})
	if err != io.EOF {
		return errors.New("body must only contain a single JSON value")
	}

	return nil
}

func IsErrorNotFound(err error) bool {
	return err.Error() == "not found"
}
