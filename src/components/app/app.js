import React, {Component} from 'react';
import BreadTop from '../bread-top';
import BreadBottom from '../bread-bottom';
import ButtonList from '../button-list';
import ResetButton from '../reset-button';
import CreatedBy from '../created-by';
import ThemeButton from '../theme-button';
import './app.css';
import './media.css';

export default class App extends Component {

    state = {
        ingredients : [],
        darkTheme: false
    }

    onAddIngredient = (btnLabel) => {
        let newArr = [];
        const elem = btnLabel;
        newArr = [...this.state.ingredients, elem];

        this.setState({
            ingredients: newArr
        })
    }

    onDeleteIngredient = (inx) => {
        let oldArr = [...this.state.ingredients];
        
        const before = oldArr.slice(0, inx);
        const after = oldArr.slice(Number(inx) + 1);

        const newArr = [...before, ...after];

        this.setState({
            ingredients: newArr
        })
    }

    onDelAllIngredients = () => {
        this.setState({
            ingredients : []
        })
    }

    burgerFromChief = () => {
        this.setState({
            ingredients: ['salad', 'cheese', 'bacon', 'cheese', 'meat', 'meat', 'salad']
        })
    }

    onToggleTheme = () => {

        const {darkTheme} = this.state;
        // const body = document.querySelector('body');
        
        // if (darkTheme) {
        //     body.style.backgroundColor = '#000000';
        // } else {
        //     body.style.backgroundColor = 'rgb(220, 224, 220)';
        // }
        
        this.setState({
            darkTheme: !darkTheme
        })
    }

    render() {

        const {ingredients, darkTheme} = this.state;

        const foodElements = ingredients.map((item, i) => {
            const clazz = item.toLowerCase();
            let key = `${clazz} + ${i}`;
            return (
                <div className={`${clazz}`}
                key={key}
                onClick={() => this.onDeleteIngredient(`${+i}`)}></div>
            )   
        });

        const clazz = darkTheme ? 'dark-mode' : null;

        return (
            <>
                <div className="box">
                    <ThemeButton onToggleTheme={this.onToggleTheme} darkTheme={darkTheme}/>
                    <h1 className={`title ${clazz}`}>Burger Constructor</h1>
                    <BreadTop/>
                    {foodElements}
                    <BreadBottom/>
                </div>
                <ButtonList onAddIngredient={this.onAddIngredient} darkTheme={darkTheme}/>
                <ResetButton onDelAllIngredients={this.onDelAllIngredients}
                burgerFromChief={this.burgerFromChief}/>
                <CreatedBy darkTheme={darkTheme}/>
            </>
        )
    }
}