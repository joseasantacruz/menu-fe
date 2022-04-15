import 'antd/dist/antd.css';
import { Card, Col,Popconfirm } from 'antd';
import React from "react";
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
function MenuItem(prop) {
  const { Meta } = Card;
  function del_confirm(e) {
      console.log(e);
      prop.handleRemove(prop.name);
  }

  return (
    <Col  xs={24} sm={12} xl={8} >
      <Card hoverable  cover={<img alt="example" src={prop.image_url} />}  extra={<Popconfirm
            title="Are you sure to delete this MenuItem?"
            onConfirm={del_confirm}
            okText="Yes"
            cancelText="No"  >
            <DeleteOutlined key="delete" />
          </Popconfirm> } >

        <Meta title={prop.name} description={prop.description} />
             <p style= {{marginTop: '2%'}}> $ {prop.price} </p>
      </Card>
    </Col>
  );
}

export default MenuItem;