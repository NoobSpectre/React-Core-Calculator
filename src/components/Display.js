import { useBtn } from './assets/BtnContext';
import Screen from './assets/Screen';

const Display = () => {
  const { inputRef, opn } = useBtn();

  const displayTag = {
    marginBlockEnd: '0.6rem',
    boxShadow: '0 0 2px',
    borderRadius: 'inherit',
  };

  const opnTag = {
    margin: 0,
    paddingTop: opn === '-' ? '.15rem' : '.5rem',
    paddingLeft: '.4rem',
    fontWeight: 'bolder',
    fontSize: opn === '-' ? '1.5rem' : '1rem',
    backgroundColor: '#b0b0b0',
  };

  return (
    <div style={displayTag} onClick={() => inputRef.current.focus()}>
      <Screen ref={inputRef} inputScreen={true} />
      <div style={{ display: 'flex' }}>
        <p style={opnTag}>{opn}</p>
        <Screen inputScreen={false} />
      </div>
    </div>
  );
};

export default Display;
