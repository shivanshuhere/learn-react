// modual css
// import styles from './Button.module.css'; 

function Button () {
    // internal css
    const css = {
    fontSize: ``,
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,

    borderRadius: `4px`,
    backgroundColor: `lightgreen`,
    padding: `0.5rem 1rem`,
    color: `#fff`,
    textTransform:`capitalize `,
    cursor: `pointer`,

    }

    return (
        // <button className={styles.btn}>
        //     click me!
        // </button>

        <button style={css}>
        click me!
        </button> // inline css
    );
}

export default Button