function SnapContainer(props) {
    return (
        <>
            <div style={{scrollSnapAlign: 'start'}}>
                {props.children}
            </div>
            <div style={{scrollSnapAlign: 'end'}} />
        </>
    );
}

export default SnapContainer;