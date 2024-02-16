import React from "react";
import { Outlet } from "react-router";
function Navbar() {
    return (
        <>
            <div className="w-full flex flex-grow flex-col ">
                <nav className=" flex justify-between px-5 py-1  bg-white h-10 items-center  sticky top-0">
                    <h1 className="text-2xl font-bold text-gray-600">
                        Dashboard
                    </h1>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA7xJREFUSEvFl3fIj2sYxz/IHp2yZcXhhMimKBIiK1mHhMg4ji0kOyMroyQzf8geGQkndLJHiMieiZAie7u/uh7dv9vveZ+fv1z1ej33te5rfa/7zcZvomy/yS+/6jg7UB+oAJSySz8EbgGnga+ZBpKp47+A4UBnoGiM8afAZmARcDPpAkmOCwPLgU5Jhjy+ot4CDAaexell5bgccAD405RlcDdw1vsRq4791APawI/yXQVaAA/SOY9zrHSeA0qb0n3gb+BEQuSNgPVAWU9PF3oS6qVznBM4ak0k+TXAMOCVKecDWlmDSf86sA94b/wCwBKgt32fdJlrDHz2nadzPBsYZ0Jy2tdTUPr3uBpWCyK4AHQA7nnn0u1j3zOBiVk5VorUkYpa6a0KvDaFXMA1oHxMum+bfBR5IeCKjd1HoJJ/sTDihcAIM6x6HfecTAMmu5t/AoYAG42nqKQnW5OAGZ5OM+CgfS8ARkc837H+/wgo7rrzjFfjSPYiUN3dfJ3LSs8g6k1AV+v2ugHvPFDTMqhSfSffsRrgiJ0LBEYGBt4BuYFZwISAp7PxLqKXgFLskxrtXztoYAiX4lidu9gEugBbAwOXrYZrgV4BT1no4ZDtkmXFZ3e3EdPZP8CyMGJ13XTTKJIGdYRgA2ys1On/maxGSx2cF1jqRRc5V8NG3a5pmRs6VmrVACItANXbp4KAoi4TnEefd4Ealm5fpKS7sBaJaJQ1YkqqlV6BvKitzWvoQ0ZWGjT6vG0uQ0PTXDayJagVaclINsVxQw8SNTZR2tMFWNmhW3Nj7HUodScmCzqe4v6ZanytVE1MiuM8rviPrSt3AB0DY9rFaiDNt0BENRW9dQilNB8GNFZfAr1dbszaOXx4bqP6IXSs79UGkRodgbu6VCTUUWQVs4hMrBtAa3sY6Fvze8qNoFBvhSvFwEg/RK4mwP/G1FqrDWgnaxUWs3PdWGASQWl+ayoZF2kT1XI48MLht8BDlxYJJ47FOdb5TrcS25uAbqmGUqpEgjyNjDLik8okHJhjh2oglSBCuO3hYyLddvrDIgrHRnM8KCHVq4B+gYxmWFArVPtBcQ+BKsAhhzIlPFl1cQT4cf5bAvs9prBA5VPtUyirp48aSfWOXiFa5CqDUEqG9KTJYWAj2f5WEnW/SJE2tY7/6aJJjz29NgRzY7zxScj299rOs3q/iRNOchzpKer5brF3S/C6ARgb98DLpMZx9oXXesxrr+q3SC8PAYh+R++ypKz88l8SiQYzFcg01Znay1juGzC8sh8i2SWvAAAAAElFTkSuQmCC" />
                </nav>
                <Outlet />
            </div>
        </>
    );
}

export default Navbar;
