import Heading from "../components/Heading";
import ProfileLogo from "../components/ProfileLogo";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

export default function SendMoney() {
    const [amount, setAmount] = useState(0);

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const firstname = searchParams.get('firstName');
    const lastname = searchParams.get('lastName');
    const to = searchParams.get('toId');



    return (
        <>

            <div className="bg-slate-100 h-screen flex justify-center items-center">
                <div style={{ width: "400px" }} className=" bg-white rounded-xl shadow-3xl p-4">
                    {/* <div className="font-bold text-3xl text-center p-5"> Send Money </div> */}
                    <Heading text={"Send Money"} />

                    <div className="px-6 mt-12">
                        <ProfileLogo firstName={firstname} lastName={lastname} />


                    </div>

                    <div className="px-5 mt-1">
                        <Input
                            onChangeFn={(e) => {
                                setAmount(e.target.value)
                            }}
                            label={"Amount (in Rs.)"}
                            id={"amount"}
                            placeholder={"Enter amount"}
                            type={"Number"} />

                    </div>


                    <div className="mt-5 px-5">
                    <Button
                        onClickFn={() => {
                            if (amount <= 0) {
                                alert('Enter valid amount')
                            } else {
                                axios
                                    .post('http://localhost:3000/api/v1/account/transfer', {
                                        to,
                                        amount
                                    }, {
                                        headers: {
                                            Authorization: localStorage.getItem('token'),
                                        }
                                    })
                                    .then((res) => {
                                        // console.log(res.data.message);
                                        alert(res.data.message);
                                        navigate('/dashboard')
                                    })
                                    .catch((err) => {
                                        // console.log(err.response.data.message);
                                        alert(err.response.data.message);
                                    })

                            }
                        }
                        }
                        text={"Initiate Transfer"} />
                </div>





                </div>
            </div>



        </>
    )


}