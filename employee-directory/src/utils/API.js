import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=50");
  }
};
