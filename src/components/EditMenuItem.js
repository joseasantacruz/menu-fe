import React,{ useState} from "react";
import { Card, Row, Col} from "antd";
function EditMenuItem(prop){
 const [name, setName] = useState(prop.menuitem.name);
 const [description, setDescription] = useState(prop.menuitem.description);
 const [price, setPrice] = useState(prop.menuitem.price);
 const [image, setImage] = useState(prop.menuitem.image_url);
  function handleSubmit() {
    prop.handleSubmit(name,description,price,image);
  };

    return (
        <Card title='Edit Menu Item'
        style={{
        width: '90%',
        border: '2px solid black',
        display: 'inline-grid'
        }} >
            <p> {prop.description}</p>

                 <form onSubmit={handleSubmit}>
                     <Row >
                         <Col  xs={24} sm={24} xl={24} >
                            <label style={{ paddingRight:'5%'}}>
                              Name:
                            </label>
                          <input type="text" value={name} onChange={e => setName(e.target.value)} />
                         </Col>
                     </Row>
                      <br />
                     <Row >
                         <Col  xs={24} sm={24} xl={24} >
                            <label style={{ paddingRight:'5%'}}>
                              Description:
                            </label>
                              <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                         </Col>
                     </Row>
                      <br />
                     <Row >
                         <Col  xs={24} sm={24} xl={24} >
                            <label style={{ paddingRight:'5%'}}>
                              Price:
                            </label>
                              <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
                         </Col>
                     </Row>
                      <br />
                     <Row >
                         <Col  xs={24} sm={24} xl={24} >
                            <label style={{ paddingRight:'5%'}}>
                              Image URL:
                            </label>
                              <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                         </Col>
                     </Row>
                      <br />
                      <br />
                    <input type="submit" value="Submit" />
                  </form>

        </Card>

    );
}
export default EditMenuItem;