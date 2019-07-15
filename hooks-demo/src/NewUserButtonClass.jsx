class NewUserButton extends React.Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.props.onClick();
        this.setState({clicked: true});
    }

    render() {
        return (
            <Button variant="primary" className="new-user-button">+New User</Button>
        );
    }
}
