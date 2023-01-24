import axios from "axios";

import { BASE_URL } from "../utils/system";

export function findUser(name: string) {
  return axios.get(`${BASE_URL}/${name}`)
}

