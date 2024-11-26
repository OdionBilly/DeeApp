import PropTypes from 'prop-types';
const Card = (props) =>  {
    return <div className="p-[2rem] mt-[2rem] rounded-2xl bg-[#fff]">
        {props.children}
    </div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Card;