import Mission from "../types/Mission";

interface Props {
  misson: Mission;
}

const Item = ({ misson }: Props): React.JSX.Element => {
  const { description, name, priority, status } = misson;
  return (
    <div className="item">
      <div className="description: ">{description}</div>
      <div className="name: ">{name}</div>
      <div className="priority: ">{priority}</div>
      <div className="status: ">{status}</div>
    </div>
  );
};

export default Item;
