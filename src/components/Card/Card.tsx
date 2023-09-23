import React, { createContext } from 'react';

export const CardContext = createContext({} as CardContextProps);
const { Provider } = CardContext;

export interface ProductStructureProps{
    id: number;
    name?: string;
}

export interface CardContextProps {
    className?: string;
    style?: {}
    product?: ProductStructureProps;
    // counter: number;
    // increaseBy: (arg: number) => void;
    // maxCount?: number;
}

interface CardHandlers {
    count: number,
    handleCount: () => void;
}

interface CardProps {
    children: (args: CardHandlers) => React.JSX.Element;
    className?: string;
    style?: {},
    product?: ProductStructureProps
}

export const Card = ({ children, className = '', style, product }: CardProps) => {

    const count = 0;

    const handleCount = () => {
        console.log('count');
    }

    const args = {
        handleCount,
        count
    }

    return (
        <>
            <Provider
                value={{
                    className,
                    style,
                    product
                }}
            >
                <div>
                    {
                        children(args)
                    }
                </div>
            </Provider>
        </>
    )
}

