const Home = () => {
    return (
        <div style={{marginLeft:"25%",padding:"1px 16px",height:"800px"}}>
            <h2>Fixed Full-height Side Nav</h2>
            <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
            <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
            <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
            <p>Some text..</p>
        </div>
    )
};

export default Home;