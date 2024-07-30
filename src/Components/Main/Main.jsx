import React, { useState, useEffect } from 'react';
import './MainStyle.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IoMdClose } from "react-icons/io";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Pagination from '@mui/material/Pagination';
import { useGetproductByNameQuery } from '../../Services/Product';
import Button from '@mui/material/Button';
import { BsClipboardData } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../Services/CarteSlice';
import { toast } from "react-toastify";
import Alerts from "./Alerts";

export default function Main() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const URL = import.meta.env.VITE_BASE_URL;

    const [isLogggingIn, SetIsLoggingIn]= useState(false);
    const [OpenAlert,setOpenAlert]= useState(false);

    const [Typecategory, setTypecategory] = useState('');
    const [selectedItem, setSelectedItem] = useState("All");
    const [OpenModal, SetOpenModal] = useState(false);
    const [ImgInitiale, SetImgInitiale] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = 4;
    const [DataCat, setDataCat] = useState('products?populate=*');
    const { data, error, isLoading } = useGetproductByNameQuery(DataCat);
    const [filteredData, setFilteredData] = useState([]);
    
    // Fonction pour ouvrir le modal avec le produit sélectionné
    const handleOpenModal = (item) => {
        setSelectedProduct(item);
        SetOpenModal(true);
    };

    // Fonction pour fermer le modal
    const handleCloseModal = () => {
        SetOpenModal(false);
        setSelectedProduct(null);
        SetImgInitiale('');
    };

    useEffect(() => {
        //verifier si il ya un user connecter ou non 
        const userConnecter = localStorage.getItem('user');
        if (userConnecter){
            SetIsLoggingIn(true);
        }

        //lire si le user choisie un category special ou nn 
        const getTypeCategoryFromUrl = () => {
            const path = window.location.pathname;
            return path.split("/")[1];
        };
        setTypecategory(getTypeCategoryFromUrl());

        if (data) {
            let items = data.data;
            if (Typecategory) {
                items = items.filter(item => item.attributes.NatureProduct === Typecategory);
            }
            setFilteredData(items);

            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
        }
    }, [data, currentPage, Typecategory]);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };


    const AddToCart = (product) => {

        if (isLogggingIn){
            dispatch(addToCart(product));
            // Mise à jour de l'état localStorage
            const currentProductCount = parseInt(localStorage.getItem('shoppingCartCount')) || 0;
            const newProductCount = currentProductCount + 1;
            localStorage.setItem('shoppingCartCount', newProductCount);
            
            toast.info(`Vous avez ajouté un produit. Total: ${newProductCount}`, {
                position: "bottom-left",
            });
            // Redirection vers la page du panier
            navigate('/ShoppingCart');
            window.location.reload();
        }
        else {
            setOpenAlert(true);
        }
      }

    const changeState=(DataCat,genre)=> {
        setDataCat(DataCat);
        setFilteredData(genre);
    }

    return (
        <div className='MainStyle'>
            <div className='containerMenu'>
                <div className="left">
                    <h2>Selected Products</h2>
                    <p>All our new arrivals in an exclusive brand selection</p>
                </div>
                <div className="right">
                    <span className={selectedItem === "All" ? "selected" : ""} onClick={() => changeState('products?populate=*', 'All')}>All Products</span>
                    <span className={selectedItem === "Men" ? "selected" : ""} onClick={() => changeState('products?populate=*&filters[category][$eq]=men', 'Men')}>Men Category</span>
                    <span className={selectedItem === "Women" ? "selected" : ""} onClick={() => changeState('products?populate=*&filters[category][$eq]=women', 'Women')}>Women Category</span>
                </div>
            </div>
            <div className="ListCard">
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    currentItems.map((item) => (
                        <Card className="card" key={item.id}>
                            <CardMedia className="cardMedia"
                                image={`${URL}${item.attributes.productimage.data[0].attributes.url}`}
                                title={item.attributes.productTitle}
                            />
                            <CardContent>
                                <div className="headerCard">
                                    <h3 className="titreCard">{item.attributes.productTitle}</h3>
                                    <h5 className="paragCard">{item.attributes.productPrice}dt</h5>
                                </div>
                                <p className="DescriptionCard">
                                    {item.attributes.description}
                                </p>
                            </CardContent>
                            <CardActions className="CardAction">
                                <Button id="Panier" onClick={() => handleOpenModal(item)}>
                                    <BsClipboardData size={20} style={{marginBottom:'9px'}}/>
                                    Voir détails
                                </Button>
                                <Button>
                                    <Rating name="read-only" value={item.attributes.productRating} readOnly emptyIcon={<StarBorderIcon style={{ color: 'grey' }} />} />
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                ) : null}
                {selectedProduct && (
                    <Modal id='ModalPanier' open={OpenModal}>
                        <Box id="ModalStyle">
                            <IoMdClose id="FermetureModal" onClick={handleCloseModal} />
                            <div id="contenuModal">
                                <img src={ImgInitiale === '' ? `${URL}${selectedProduct.attributes.productimage.data[0].attributes.url}` : ImgInitiale} alt={`Image ${ImgInitiale}`} id='partieLeft' />
                                <div id="partieRigth">
                                    <h1>{selectedProduct.attributes.productTitle}</h1>
                                    <h2>{selectedProduct.attributes.productPrice}dt</h2>
                                    <p>{selectedProduct.attributes.description}</p>
                                    <div id="listeImg">
                                        {selectedProduct.attributes.productimage.data.map((img, index) => (
                                            <img key={index} src={`${URL}${img.attributes.url}`} alt={`Image ${index}`} id="CatalogueImg" onClick={() => ChangePhoto(`${URL}${img.attributes.url}`)} />
                                        ))}
                                    </div>
                                    
                                    <Button className='btnBuy' onClick={() => AddToCart(selectedProduct)}>
                                        <AiOutlineShoppingCart size={28} /> Add To Cart
                                    </Button>
                                    {OpenAlert && 
                                    <Alerts message={'Vous n etes pas connecter , verifier svp '} type={'error'}  open={OpenAlert}/>
                                    }
                                </div>
                            </div>
                        </Box>
                    </Modal>
                )}
            </div>
            <Pagination
                count={Math.ceil(filteredData?.length / itemsPerPage)}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                id="pagination"
            />
        </div>
    );
}
