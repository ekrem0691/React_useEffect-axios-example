import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';



const TutorialList = ({tutorials}) => {
  

  return (
    <div className="container mt-4">
      <hr/>
      <br />
      <h1 className='text-center text-bg-warning' >Tutorial-List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    size={20}
                    className="me-2 text-warning cursor-pointer"
                    
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    
                  />s
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <EditTutorial  /> */}
    </div>
  );
};

export default TutorialList;
