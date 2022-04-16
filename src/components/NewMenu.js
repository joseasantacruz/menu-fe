import React,{ useState} from "react";
import { Card, Row, Col} from "antd";
function NewMenu(prop){
 const [name, setName] = useState();
 const [description, setDescription] = useState();
  function handleSubmit() {
    prop.handleSubmit(name,description);
  };
    return (
        <Card title='New Menu '
        style={{
        width: '90%',
        border: '2px solid black',
        display: 'inline-grid'
        }} >
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
                      <br />
                    <input type="submit" value="Submit" />
                  </form>

        </Card>

    );
}
export default NewMenu;