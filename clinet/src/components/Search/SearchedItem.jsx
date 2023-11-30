import React, { useContext } from "react";
import { ProviderPass } from '../Provider'
import { Link } from "react-router-dom";

export default function SearchedItem({ data }) {

  const { setSearchStatus } = useContext(ProviderPass)

  return (
    <div className="SearchedItem">
      <div className="SearchedItem_inner">
        {data.map((item) => {
          const content = item.content.substring(0, 100);
          return (
            <Link
              onClick={()=>setSearchStatus(false)}
              key={item.noteId}
              to={`/pages/NotePage/${item.noteId}`}
              className="SearchedItem_element"
            >
              <p dangerouslySetInnerHTML={{ __html: content }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
