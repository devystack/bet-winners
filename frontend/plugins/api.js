// import Auth from "@/api/auth";
import API from '@/api/index'

export default (context, inject) => {
  const factories = {
    request: API(context.$axios),
  };
  // const factories = API(context.$axios)

  inject("api", factories);
};
