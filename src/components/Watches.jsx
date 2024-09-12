import React, { useState } from "react";
import Clock from "./Clock";
import { nanoid } from "nanoid";

function Watches() {
    const [data, setData] = useState({ name: "", timezone: "" });
    const [formdata, setFormdata] = useState([]);

    const inputChange = (e) => {
        setData((prev) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const formSubmit = (e) => {
        e.preventDefault();

        if (data.name) {
            setFormdata((prev) => [...formdata, { name: data.name, timezone: data.timezone, id: nanoid(5).toLowerCase() },
            ]);
            setData((prev) => ({ ...data, name: "", timezone: "" }));
        } else return;
    };

    return (
        <div className="App">
            <form className="form" onSubmit={formSubmit}>
                <div className="input">
                    <div className="title">Название</div>
                    <input
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={inputChange}
                    ></input>
                </div>
                <div className="input">
                    <div className="title">Временная зона</div>
                    <input
                        name="timezone"
                        type="text"
                        value={data.timezone}
                        onChange={inputChange}
                    ></input>
                </div>
                <button className="btn" onClick={formSubmit}>Добавить</button>
            </form>
            <Clock data={formdata} changedata={setFormdata} />
        </div>
    );
}

export default Watches;