import React, { useRef } from 'react';
import MyExercise from './components/MyExercise';
import RecordBadge from './components/RecordBadge';
import MyDiary from './components/MyDiary';
import BodyRecord from './components/BodyRecord';

const MyRecord = () => {
  const bodyRecordRef = useRef<HTMLDivElement>(null);
  const myExerciseRef = useRef<HTMLDivElement>(null);
  const myDiaryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-[160px] my-[64px]">
      <RecordBadge
        bodyRecordRef={bodyRecordRef}
        myExerciseRef={myExerciseRef}
        myDiaryRef={myDiaryRef}
      />
      <BodyRecord ref={bodyRecordRef} />
      <MyExercise ref={myExerciseRef} />
      <MyDiary ref={myDiaryRef} />
    </div>
  );
};

export default MyRecord;
