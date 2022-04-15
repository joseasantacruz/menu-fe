import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import React from "react";
function MenuItem(prop) {
  const { Meta } = Card;
  return (
<Col  xs={24} sm={12} xl={8} >
      <Card hoverable style={{ height: '95%', margin: "2%" }} cover={<img alt="example" src={prop.image_url} />} >
        <Meta title={prop.name} description={prop.description} />
             <p style= {{marginTop: '2%'}}> $ {prop.price} </p>
      </Card>
    </Col>
  );
}

export default MenuItem;