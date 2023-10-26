import Headers from "./Headers";

const Layout = ({ children }) => {
    return (
        <div>
            <Headers />
            <div>{children}</div>
        </div>
    );
};

export default Layout;