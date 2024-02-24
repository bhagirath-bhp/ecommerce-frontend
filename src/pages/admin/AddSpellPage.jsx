import { useState, useEffect } from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar';
import { Button } from '@material-tailwind/react';
import { toastState } from '../../components/state/RecoilState';
import { addSpell } from '../../api/spell';
import { useSetRecoilState } from 'recoil';



const AddSpellPage = () => {
  const [spell, setSpell] = useState({
    name: '',
    description: '',
  });
  const setToastState = useSetRecoilState(toastState);
  const [isBtnLoading, setIsBtnLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpell({ ...spell, [name]: value });
    console.log(spell)
  };

  const handleSubmit = async (e) => {
    setIsBtnLoading(true)
    e.preventDefault();

    // Call the updated addNewProduct function
    const result = await addSpell(spell.name, spell.description);

    if (result) {
      setIsBtnLoading(false);
      setSpell({
        name: '',
        description: '',
      });
      setToastState([result, 'success', 'top-right']);

    } else {
      // TODO: Handle failure
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-[2rem]">
        <h2 className="text-3xl font-semibold mb-4">Add Spell</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Spell Name
            </label>
            <input
              id="name"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="text"
              name="name"
              value={spell.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Spell Description
            </label>
            <textarea
              id="description"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              name="description"
              value={spell.description}
              onChange={handleChange}
            />
          </div>
          <Button type='submit' className='bg-golden text-sm' loading={isBtnLoading}>
            Add Spell
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddSpellPage;
