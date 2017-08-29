import { render, unmountComponentAtNode } from 'react-dom'
import React from 'react';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export const componentTestMounter = ({
    initialEntries,
    initialIndex, 
    component: TestComponent,
    steps,
    store,
}) => {
    const div = document.createElement('div')
    
    class Assert extends React.Component {

        componentDidMount() {
            this.assert()
        }

        componentDidUpdate() {
            this.assert()
        }

        assert() {
            const nextStep = steps.shift()
            if (nextStep) {
                nextStep({ ...this.props, div })
            } else {
                unmountComponentAtNode(div)
            }
        }

        render() {
            return this.props.children
        }
    }

    class Test extends React.Component {
        render() {
            if (store) {
                return (<Provider store={store}><WithMemoryRouter /></Provider>);
            } else {
                return (<WithMemoryRouter />);
            }
        }
    }

    class WithMemoryRouter extends React.Component {
        render() {
            return (
                <MemoryRouter
                    initialIndex={initialIndex}
                    initialEntries={initialEntries}
                >
                    <Route render={(props) => (
                    <Assert {...props}>
                        <TestComponent/>
                    </Assert>
                    )}/>
                </MemoryRouter>
            )
        }
    }

    render(<Test/>, div)
};
