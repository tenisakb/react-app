import { API_URL, API_NOTES } from "../constants";
import "rxjs/add/observable/from";
import { Observable } from "rxjs/Observable";

const getList = () => {
  const request = fetch(`${API_URL}${API_NOTES}`).then(response =>
    response.json()
  );
  return Observable.from(request);
};

export { getList };
