function SnapContainer(props) {
    return (
        <div style={{scrollSnapAlign: 'start'}}>
            {props.children}
        </div>
    );
}

export default SnapContainer;