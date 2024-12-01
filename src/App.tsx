import { useEffect } from 'react';
import './App.css';
import useAuth from './useAuth';

function App() {
  const { isAuthenticated, loading } = useAuth();

  const premadeElement = {
    type: "@webflow/XscpData",
    payload: {
      nodes: [
        {
          _id: "3bcaf041-1822-9460-3a16-1f8cd1b0fd69",
          type: "Link",
          tag: "a",
          classes: [],
          children: [
            "34202d13-1ad6-29c3-32ea-0e427cc1876e",
            "b21d0a24-f970-524d-09db-76ec00d8ea8a"
          ],
          data: {
            button: true,
            block: "",
            link: { mode: "external", url: "#" },
            eventIds: [],
            attr: { id: "" },
            devlink: { runtimeProps: {}, slot: "" },
            displayName: "",
            xattr: [],
            search: { exclude: true },
            visibility: { conditions: [] }
          }
        },
        {
          _id: "34202d13-1ad6-29c3-32ea-0e427cc1876e",
          text: true,
          v: "Button Text"
        },
        {
          _id: "b21d0a24-f970-524d-09db-76ec00d8ea8a",
          type: "Block",
          tag: "div",
          classes: [],
          children: [],
          data: { text: false, tag: "div", devlink: { runtimeProps: {}, slot: "" }, displayName: "", attr: { id: "" }, xattr: [], search: { exclude: false }, visibility: { conditions: [] } }
        }
      ],
      styles: [],
      assets: [],
      ix1: [],
      ix2: {
        interactions: [],
        events: [],
        actionLists: []
      }
    },
    meta: {
      droppedLinks: 0,
      dynBindRemovedCount: 0,
      dynListBindRemovedCount: 0,
      paginationRemovedCount: 0,
      universalBindingsRemovedCount: 0,
      unlinkedSymbolCount: 0
    }
  };

  // Function to handle copy event
  const handleCopy = (event: ClipboardEvent) => {
    event.preventDefault();
    // Set the data to clipboard in application/json format
    event.clipboardData?.setData("application/json", JSON.stringify(premadeElement));
    alert("Component copied to clipboard!");
  };

  useEffect(() => {
    // Add the copy event listener on component mount
    document.addEventListener("copy", handleCopy);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="webflow-copy-component">
        <button id="buttonId" onClick={() => document.execCommand("copy")}>
          Copy to Clipboard
        </button>
      </div>
    );
  } else {
    return (
      <>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => (window.location.href = "nextjs-aws-one.vercel.app")}>
            Login
          </button>
        </div>
        <p className="read-the-docs">
          Click the login button to redirect to the Next.js app
        </p>
      </>
    );
  }
}

export default App;
