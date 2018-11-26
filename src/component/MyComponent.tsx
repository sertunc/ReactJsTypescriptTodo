import * as React from 'react';

interface IMyComponentProps {
    someDefaultValue: string
}

interface IMyComponentState {
    name: string
}

export default class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
    constructor(props: IMyComponentProps) {
        super(props);

        this.state = { name: this.props.someDefaultValue };
    }

    public handleOnChange(event: any): void {
        this.setState({ name: event.target.value });
    }

    public MesajVer(mesajIcerik: string): void {
        alert(mesajIcerik);
    }

    public render() {
        return (
            <div>
                <div>
                    <input onChange={e => this.handleOnChange(e)} />
                </div>
                <div>
                    Hello {this.state.name}!
                </div>
                <div>
                    <button onClick={() => this.MesajVer(this.state.name)}>Mesaj ver</button>
                </div>
            </div>
        );
    }
}