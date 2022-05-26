import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Overview (props) {
  return (
    <ol>
      {React.Children.toArray(
        props.array.map(item => {
          return (
            <li>
                {item}
                <FontAwesomeIcon icon={faTrash} className="svg" onClick={() => props.onDelete(item)}/>
            </li>
          )
        })
      )}
    </ol>
  )
}

