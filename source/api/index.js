import axios from "axios";
import { _receiveData } from "../until/storage";
export const baseUrl = "http://192.168.1.11:3000/api/v1/";

export const register = async (
  name,
  email,
  password,
  phone,
  apartment,
  zip,
  city,
  country
) => {
  let result = {
    data: null,
    error: null,
    status: "",
    message: "",
  };
  const data = {
    name: name,
    email: email,
    password: password,
    phone: phone,
    isAdmin: false,
    apartment: apartment,
    zip: zip,
    city: city,
    country: country,
  };
  await axios({
    method: "POST",
    url: `http://192.168.1.11:3000/api/v1/users/register`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    data: data,
  })
    .then((res) => {
      if (res.status == 200) {
        result = {
          data: res.data,
          status: "success",
        };
      } else {
        result = {
          data: res.data,
          status: "failed",
        };
      }
    })
    .catch((error) => {
      result = {
        data: null,
        error: error,
        status: "failed",
      };
    });

  return result;
};

export const login = async (email, password) => {
  let result = {
    data: null,
    error: null,
    status: "",
    message: "",
  };
  const data = {
    email: email,
    password: password,
  };
  await axios({
    method: "POST",
    url: `http://192.168.1.11:3000/api/v1/users/login`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    data: data,
  })
    .then((res) => {
      if (res.status == 200) {
        result = {
          data: res.data,
          status: "success",
        };
      } else {
        result = {
          data: res.data,
          status: "failed",
        };
      }
    })
    .catch((error) => {
      result = {
        data: null,
        error: error,
        status: "failed",
      };
    });

  return result;
};

export const getAllProduct = async () => {
  let data = {
    data: null,
    error: null,
    status: "",
    message: "",
  };

  await axios
    .get(`http://192.168.1.11:3000/api/v1/products/`)
    .then((res) => {
      console.log(res.data);

      if (res.status == 200) {
        result = {
          data: res.data,
          status: "success",
        };
      } else {
        result = {
          data: res.data,
          status: "failed",
        };
      }
    })
    .catch((error) => {
      if (error) {
      }
    });

  return result;
};

export const getAllCategory = async () => {
  let data = {
    data: null,
    error: null,
    status: "",
    message: "",
  };

  await axios({
    method: "GET",
    url: "http://192.168.1.11:3000/api/v1/categories",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        data = {
          data: res.data,
          status: "success",
          // length:res.data.length
        };
      } else {
        data = {
          data: res.data,
          status: "failed",
        };
      }
    })
    .catch((error) => {
      data = {
        data: null,
        error: error,
        status: "failed",
      };
    });

  return data;
};

export const getProductListByCategoryId = async (catId) => {
  let data = {
    data: null,
    error: null,
    status: "",
    message: "",
  };
  await axios({
    method: "GET",
    url: `http://192.168.1.11:3000/api/v1/products/categoryId/${catId}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        data = {
          data: res.data,
          status: "success",
        };
      }
    })
    .catch((error) => {
      data = {
        data: null,
        error: error,
        status: "failed",
      };
    });

  return data;
};

export const addProduct = async (formData) => {
  let data = {
    data: null,
    error: null,
    status: "",
    message: "",
  };
  await axios({
    method: "POST",
    url: "http://192.168.1.11:3000/api/v1/products/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: formData,
  })
    .then((res) => {
      if (res.status == 200) {
        data = {
          data: res.data,
          status: "success",
        };
      }
    })
    .catch((error) => {
      data = {
        data: null,
        error: error,
        status: "failed",
      };
    });

  return data;
};

export const deleteProduct = async (id) => {
  let data = {
    data: null,
    error: null,
    status: "",
    message: "",
  };
  await axios({
    method: "DELETE",
    url: `http://192.168.1.11:3000/api/v1/products/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        data = {
          data: res.data,
          status: "success",
        };
      }
    })
    .catch((error) => {
      data = {
        error: error,
        status: "failed",
      };
    });

  return data;
};

export const updateProduct = async (formData, id) => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: true,
    error: null,
  };
  await axios({
    method: "PUT",
    url: `${baseUrl}products/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: formData,
  })
    .then((res) => {
      console.log(res.data);
      if (res.status == 200) {
        data = {
          message: "C???p nh???t s???n ph???m th??nh c??ng",
          data: res.data,
          loading: false,
          status: "success",
        };
      }
    })
    .catch((error) => {
      console.log(error);
      if (error) {
        data = {
          error: error.response,
          loading: false,
          status: "failed",
        };
      }
    });

  return data;
};

export const getProductById = async (id) => {
  let data = {
    message: "",
    data: null,
    status: false,
    loading: true,
    error: null,
  };

  await axios({
    method: "GET",
    url: `http://192.168.1.11:3000/api/v1/products/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 200) {
      data = {
        data: res.data,
        loading: false,
        status: "success",
      };
    }
  });

  return data;
};

export const orderProduct = async (orderData) => {
  let user = {};
  await _receiveData("userInfo").then((item) => user = item);
  const TOKEN = user.token
  alert(TOKEN)
  
  
  let data = {
    message: "",
    data: null,
    status: false,
    loading: true,
    error: null,
  };

  await axios({
    method: "GET",
    url: `http://192.168.1.11:3000/api/v1/orders`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`
    },
    data: orderData
  }).then((res) => {
    if (res.status == 200) {
      data = {
        data: res.data,
        loading: false,
        status: "success",
      };
    }
  }).catch((error)=>{
    data={
      error: error.response.data
    }
  });

  
  return data;
};



export const getUserById = async() => {
  let user = await _receiveData("userInfo");
  console.log(user)
  let uid  = user.user.id
  let token = user.token;
  let data = {
    data: null,
    status: false,
    error: null,
    message: null,
    loading: true
  }
  await axios({
    method: "GET",
    url: `${baseUrl}users/${uid}`,
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }).then((res) => {
    if(res.status == 200) {
      console.log(res.data)
      data={
        data: res.data,
        loading: false,
        status: "success"
        
      }
    }

  }).catch((error) => {
    data={
      data: error.response.data,
      message: error.response.message,
      loading: false,
      status: "failed"
    }
  })    
  return data; 
}