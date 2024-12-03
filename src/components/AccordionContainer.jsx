import { useState } from "react"
import AccordionItem from "./AccordionItem"

const AccordionContainer = ({ data }) => {

    const [isOpen, setIsOpen] = useState(null);
    const toogleItem = (index) => {
        setIsOpen((prev) => prev === index ? null : index)
    }
    return (
        <div>
            {data.map((data, index) => (
                <AccordionItem
                    key={index}
                    title={data.title}
                    content={data.content}
                    isOpen={isOpen === index}
                    onToogle={() => toogleItem(index)}
                />
            ))}
        </div>
    )
}

export default AccordionContainer