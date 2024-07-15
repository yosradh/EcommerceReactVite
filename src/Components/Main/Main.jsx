import React, { useState } from 'react';
import './MainStyle.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io";


export default function Main() {
    const [selectedItem, setSelectedItem] = useState("All");
    const [Category,setCategory] = useState("All");
    const [OpenModal,SetOpenModal] = useState(false);

    const changeState = (category) => {
        setSelectedItem(category);
        setCategory(category);
    };

    const ChangeOpenModal = () => {
        SetOpenModal(true);
    }
    const handleCloseModal = () => {
        SetOpenModal(false);
    };

    return (
        <div className='MainStyle'>
        
        <div className='containerMenu'>
            <div className="left">
                <h2>Selected Products</h2>
                <p>All our new arrivals in an exclusive brand selection</p>
            </div>

            <div className="right">
                <button className={selectedItem === "All" ? "selected" : ""} onClick={() => changeState("All")}>All Products</button>
                <button className={selectedItem === "Men" ? "selected" : ""} onClick={() => changeState("Men")}>Men Category</button>
                <button className={selectedItem === "Women" ? "selected" : ""} onClick={() => changeState("Women")}>Women Category</button>
            </div>
        </div>
        <div className="ListCard">
            {["a", "b", "c", "d","k","l"].map((item) => (
                <Card className="card" key={item}>
                    <CardMedia className="cardMedia"
                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <div className="headerCard">
                            <h3 className="titreCard">T-Shirt</h3>
                            <h5 className="paragCard">$12.99</h5>
                        </div>
                        <p>
                            Lizards are a widespread group of squamate reptiles, ranging across
                            all continents except Antarctica.
                        </p>
                    </CardContent>
                    <CardActions className="CardActions">
                        <Button size="small" onClick={ChangeOpenModal}>
                            <AiOutlineShoppingCart id="Panier" />
                            Add To Cart
                        </Button>

                            <Modal
                                id='ModalPanier'
                                open={OpenModal}
                                                             
                            >
                            <Box id="ModalStyle">
                                <IoMdClose id="headModal"  onClick={handleCloseModal} />
                                <div id="contenuModal">
                                    <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg"  width='450px'   height= '300px' />
                                    <div id="partieRigth">
                                        <h2>Blue Jeans</h2>
                                        <h3>15$</h3>
                                        <p>dghdsgyvhbvhgduyvgdsbvjdvu</p>
                                    </div>
                                    
                                </div>
                                </Box>
                            </Modal>

                        <Button size="small">
                            <Rating name="read-only" value={3} readOnly />
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
      
    </div>  
    );
}
