import { useQuiz } from './QuizContext';

const ProgressBar = () => {
    const { answeredCount } = useQuiz();
    const total = 10; // Replace with dynamic question length if needed

    const progress = (answeredCount / total) * 100;
    

    return (
        <div className="w-[87%] absolute lg:bottom-11 bottom-5 left-5 lg:left-1/2 lg:-translate-x-1/2">
            <p className="text-white font-TitlingReg text-[20px] mb-6">{answeredCount} / {total} answered</p>
            <div className="w-full h-4 bg-transparent border-white/50 lg:border-[#504956] border-[.5px] rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-400 to-pink-400 transition-all"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;