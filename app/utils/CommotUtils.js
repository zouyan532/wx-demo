const changePhone = (phone) =>{
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');;
  };

  const Util = {
    changePhone  
};

export default Util;