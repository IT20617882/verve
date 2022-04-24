
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import notes, {} from "../../data/notes";
import { useDispatch, useSelector } from 'react-redux'

const MyOrders = ({ search }) => {
//for fetching order list to initialy needs to login detail after that push to
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
  return (
    <MainScreen tittle={`Welcome Back ${userInfo?.name} ......`}>
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Place An Order
          <br />
        </Button>
      </Link>

      {notes
        ?.filter((filteredNote) =>
          filteredNote._id.toLowerCase().includes(search.toLowerCase())
        )
        .map((order) => (
          <Card style={{ margin: 10 }} key={order._id}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {order._id}
              </span>

              <div>
                <Link to="/Delivery">
                  <Button style={{ marginLeft: 15, marginBottom: 6 }} size="lg">
                    Delivery Details
                    <br />
                  </Button>
                </Link>
                <Button variant="danger" className="mx-2">
                  More Actions
                </Button>
              </div>
            </Card.Header>

            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> Quantity ={order.Quantity}</p>

                <footer className="blockquote-footer">
                  <br />
                  Total Amount = {order.TotalAmount}
                  <div title="Sourse Tittle"></div>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
    </MainScreen>
  );
};
export default MyOrders;
