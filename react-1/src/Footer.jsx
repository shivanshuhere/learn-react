
function Footer () {

    const year = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {year} Shivu</p>
        </footer>
    );
}

export default Footer