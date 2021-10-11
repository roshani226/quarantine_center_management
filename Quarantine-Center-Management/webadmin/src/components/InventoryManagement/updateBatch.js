import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function UpdateBatch() {
    const { food }=useParams();
    const [stock,setstock]=useState([]);
    let history = useHistory();

    const [id, setID] = useState(null);
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);

    const [received_date, setreceived] = useState(null);
    const [expiration_date, setexpire] = useState(null);
    const [total_quantity, setquantity] = useState(0);
    const [batchnum, setbatchnum] = useState(0);
    
    useEffect(() => {
        function getstock(){
            axios.get(`http://localhost:8000/stock/get/${food}`).then((res)=>{
                setstock(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        console.log(stock);
        getstock();


        setID(localStorage.getItem('id'))
        setcategory(localStorage.getItem('category'));
        setname(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));

        setbatchnum(localStorage.getItem('batchnum'));
        setreceived(localStorage.getItem('received_date'));
        setexpire(localStorage.getItem('expiration_date'));
        setquantity(localStorage.getItem('total_quantity'));

    }, []);

    const UpdateBatch = () => {
        let newquantity={total_quantity:total_quantity}
        axios.put(`http://localhost:8000/stock/update/${food}`,
            newquantity,
        ).then((res)=>{             
            alert("Food Batch Updated");
        }).catch((err)=>{
            alert(err.message);
        })
    }

    return(
        <div>
        <div class="page-wrapper">
        <div class="content container-fluid">
        <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"800px",
                width:"1000px"}}>
            <center>
                <h1>Update batch of {name}</h1>
            </center>
                <div>
                <form>
                <div class="form-group">  
                    <label for="fname">Item Name</label>
                        <input type="text" class="form-control" id="iname" name="iname" value={name} readOnly/>
                </div>
                <div class="form-group"> 
                    <label for="lname">Category</label>
                        <input type="text" class="form-control" id="category" name="category" value={category} readOnly/>
                </div>
                <div class="form-group"> 
                    <label for="country">Price of One</label>
                        <input type="text" class="form-control" id="Price" name="Price" value={price_of_one} readOnly/>    
                </div>
                <div class="form-group"> 
                    <label for="country">Received Date</label>
                        <input type="text" id="R_date" class="form-control" name="R_date" value={received_date} readOnly/>
                </div>
                <div class="form-group"> 
                    <label for="country">Expiration Date</label>
                        <input type="text" class="form-control" id="E_date" name="E_date" value={expiration_date} readOnly/>    
                </div>
                <div class="form-group"> 
                    <label for="country">Batch Number</label>
                        <input type="text" class="form-control" id="B_number" name="B_number" value={batchnum} readOnly/> 
                </div>
                <div class="form-group"> 
                    <label for="country">Total Quantity</label>
                        <input type="Number" class="form-control" id="TQ" name="TQ" value={total_quantity} min="1" onChange={(e) =>parseInt(setquantity(e.target.value))} required/>
                </div>   

                    
                    <Link to={`/onestock/${id}`}><input type="submit" value="Update Record" class="btn btn-info" onClick={UpdateBatch}/><br></br><br/></Link> 
                    
                </form>
                </div>
                </div>
        </div>
        </div>
        </div>
    )
}