import { Navigate, useNavigate } from "react-router";
function NavigationBar() {
    const navigate = useNavigate();
    const handleClick = (param, event) => {
        navigate(param);
        event.target.classList.add(`text-red-400`);
        setTimeout(() => {
            event.target.classList.remove(`text-red-400`);
        }, 2000);
    };
    return (
        <>
            <div className="flex flex-col justify-between h-screen py-4 px-6 sticky top-0 ">
                <div>
                    <h1 className="mb-6">@DOSOMECODING</h1>
                    <div
                        className="flex gap-2"
                        onClick={(e) => handleClick("home", e)}
                    >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQ5JREFUSEvtlz8OAUEUxn/b4AhEohCVRuIA/p1BXAGdYzgCtcohBNFrVRQScQGFaNiRkeyu7MzsZJLdYqfc+d778v5989YjpeOlxEumiGtAXZGJJ3AEXhJTANpASWFzAa7B+2jEFeAG2kwsgYl0tADGmpK9gaqPu/9wUeIesDWo+x4QWHF2vk3XwKYvsV9oTpynOq5nMtFca2Bk0NVN4ORynBrAUCMgZ2ClEhCb5jII9h/iYo6dEJeDsqbwKGRyKu9nfprnQFGj1S3gEVdj8T3pI7EBBgZhd4CDitjARwjiRKttInZCbPMsOiG2GaecOK4580UglBmbrnay7NnMsZP1NqlqWeMz9SdhHUUSww91L2EfFzmZfAAAAABJRU5ErkJggg==" />{" "}
                        Dashboard
                    </div>
                    <div
                        className="flex gap-2 my-4"
                        onClick={(e) => handleClick("transaction", e)}
                    >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVBJREFUSEvtljFKQ0EQhr9A8ARJYRewtQiEQLTSA6gnsAtCsMoJjCewCgGxywnUA2ilgggpbAW7FPEEIYX7w3vyCG+zL8nupjAD0zx255udf2Z4JTZkpQ1x2YKjVd5nqQ+BPePDItn7BB8BT8AtcAnMFiUQAizeG3BqEpjY4FlwDZCvanXgJnN5DJwB73kBs+AecLUq1XJvCrTzdA8Nls4d4G4+sZCl/kl0fnWVet0qp12tOB/GTwDpnGshulpzLF2lr9V8grVA9pM5dlZvGfA58AW8OKMWOFAEXAb6wAVwDDwXiOs84gJXgQeglUSKAm4C98BuJv0uMHI+x37gG5BbfwSkp4Z+Zw1I3tVr81Eb0grWOAwA6evTnGDBDhJ9KzFLnbKk76PxRszmSuHSWXpL9yhdPa+t5vgz5gLx2Vx/sVwLJAh00TgFA6aB/9+LfwEc2TIfueGGLgAAAABJRU5ErkJggg==" />
                        Transaction
                    </div>
                </div>
                <div
                    className="flex gap-2"
                    onClick={(e) => handleClick("support", e)}
                >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjpJREFUSEvt1kuoTWEUwPHfJRMpMpERCSEGlBCijJRHMjCjUGIgoZDkkVeEJEwoZgYieYxkpISBiBR5lFcGlIEUKd86ffe2bfuec+45V7dk1a6z91lr/fdae631rQ59JB19xNVTcH9Mx0gMzy/9Hq9wDz+bDaRZ8BhswxIM6cb5J1zGAbxs9AKNwANxEOsQ0TYj33EYexC/K6UeONJ5FRMLlrdwDbfxPD8fi9lYiDkF3Uj9InysIncHHp+dD81GN7E5pfphg5Cn4DhmZb13mIE3Zbsq8DDcxYisvAWHmslx1umHfdia7x/ngvxa9FEFvoBlWWlDjqAH3C7V+MY78l1kIXx1SRk8LkGf5n+vY0ErxGwTvu9gWi6yqJkPnf7K4POpFZbjB0bhbRvgMJ2ER9nH/uR3exV4AD5jEM4m6Oo2oZ3mN1LNzM9dEB1Qk2LE81I1RvWGLMWlXgKvwpnsK8C1NiyCV6RReC4rnMQzROq/tPgCg9MoDZ8T0rddk31Er8cc+A0cfRoTpygxsU63CF6LUyXb9ThRBu/CzpLi7nQfz1uRuv6Kqf4PjvT+26neiCN/ubiCcaxc1bFlPEknS0ywTmmnncrF+i2f7bXtpDyrJ2Nxpsb4bGeAxGyOdSn2sL0JehFxRNak0epT1b9xysRVlNeIqyixpczEC4wuO2oF3KjfAxKRrsywo9j0t8DdTbY4EKZWzfveirgKfD+fcn/sW61+47mIq55cSUX6oJ5CKxE3YDb3d5+BfwFyFnIfdHwTSgAAAABJRU5ErkJggg==" />
                    Support
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
