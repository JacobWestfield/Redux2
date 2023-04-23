import { nanoid } from "nanoid";
import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  post: async () => {
    const { data } = await httpService.post(todosEndepoint, {
      completed: false,
      title: "New task added",
    });
    data.id = nanoid();
    console.log(data);
    return data;
  },
};
export default todosService;
