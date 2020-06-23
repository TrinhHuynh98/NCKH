import React from "react";
import { useForm } from "react-hook-form";

import "./style.css";

function FormAddDoc() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    alert("Thêm thành công!" + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="number">Số công văn</label>
      <input name="number" placeholder="Số" ref={register} />

      <label htmlFor="date">Thời gian</label>
      <input name="date" placeholder="" type="date" ref={register} />  

      <label htmlFor="file">Tải tệp lên</label>
      <input
          type="text"
          ref={register({ required: true })}
          placeholder="Tên văn bản tải lên"
          name="name"
        />
      <input name="file" type="file" ref={register({ required: true })} />    

      <label htmlFor="user">Chủ sở hữu</label>
      <input name="user" placeholder="" ref={register} />

      <label htmlFor="place">Nơi phát hành</label>
      <input name="place" placeholder="" ref={register} />    
        

      <input type="submit" title="Thêm"/>
    </form>
  );
}

export default FormAddDoc;