import PropTypes from 'prop-types';
const Card = (props) =>  {
    return <div className=" max-sm:p-[0.5rem] max-sm:pt-[20px] md:p-[2rem] lg:p-[2rem] mt-[2rem] rounded-2xl bg-[#fff]">
        {props.children}
    </div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Card;