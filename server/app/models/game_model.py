from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


class RhythmInput(BaseModel):
    expected: str
    actual: str
    accuracy: float


class VisualPuzzleResult(BaseModel):
    puzzle_type: str
    correct: bool
    reaction_time: float


class MemoryRecall(BaseModel):
    sequence: List[int]
    recalled_sequence: List[int]
    accuracy: float


class GameSession(BaseModel):

    user_id: str

    mode: str

    level: int

    score: int

    neural_score: int

    focus_index: int

    sync_rating: int

    recall_power: int

    stress_resistance: int

    reaction_time: float

    difficulty_level: int

    memory_result: MemoryRecall

    rhythm_result: List[RhythmInput]

    visual_result: List[VisualPuzzleResult]

    completed: bool = True

    created_at: datetime = datetime.utcnow()


class GameResultResponse(BaseModel):

    session_id: str

    score: int

    brain_rank: str

    next_difficulty: int