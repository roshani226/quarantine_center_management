import React, { useEffect, useMemo, useState } from 'react';

export default function Payment() {

    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentpage, setCurrentPage] = useState();

    const ITEMS_PER_PAGE = 25;


    useEffect(() => {
        const getData = () => {
            // showLoader();

            fetch('http://localhost:8000/payment/getAllPayemntDetails')
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setComments(json);
                    console.log(json);
                });
        };
        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computeComments = comments;

        setTotalItems(computeComments.length);


        //CURRENT PAGE SLICE
        return computeComments
    }, [comments]);

    var total = 0;
    var Card_Usage = 0;
    var Gateway_Usage = 0;
    var Card = 0;
    var Gateway = 0

    // const CalculatePrecentage = () => {
    //     var total = 0;
    //     var Card_Usage = 0;
    //     var Gateway_Usage = 0;
    //     var Card = 0;
    //     var Gateway = 0

    //     {
    //         commentsData.map(comment => {
    //             total = total + 1;
    //             if (comment.razorpayDetails.paymentId === "null") {
    //                 Card = Card + 1;
    //             } else {
    //                 Gateway = Gateway + 1;
    //             }
    //         })
    //     }

    //     {
    //         Card_Usage = parseInt((Card / total) * 100),
    //         Gateway_Usage = parseInt((Gateway / total) * 100),
    //         localStorage.setItem("Card_Precentage", Card_Usage),
    //         localStorage.setItem("Gateway_Precentage", Gateway_Usage)
    //     }

    //     return [total, Card_Usage, Gateway_Usage, Card, Gateway];
    // }


    return (
        <div>
            {
                commentsData.map(comment => {
                    total = total + 1;
                    if (comment.razorpayDetails.paymentId === "null") {
                        Card = Card + 1;
                    } else {
                        Gateway = Gateway + 1;
                    }
                })
            } 
            {
                Card_Usage = parseInt((Card / total) * 100),
                Gateway_Usage = parseInt((Gateway / total) * 100),
                localStorage.setItem("Card_Precentage", Card_Usage),
                localStorage.setItem("Gateway_Precentage", Gateway_Usage) 
            } 

            <h1> {Gateway}</h1>
            <h1> {Card} </h1>
        </div>
    )
}


