import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }


    addItem = () => {
        const name = prompt('Enter Item');
        if (name) {
            this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
            }));
        }
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.shoppingList;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.addItem}
                >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    shoppingList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    shoppingList: state.items
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
