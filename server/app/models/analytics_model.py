from pydantic import BaseModel
from datetime import datetime
from typing import List


class StressPattern(BaseModel):
    level: int
    reaction_drop: float
    timestamp: datetime


class AttentionCollapse(BaseModel):
    level: int
    missed_inputs: int
    timestamp: datetime


class PerformanceTrend(BaseModel):
    average_score: float
    average_reaction_time: float
    memory_accuracy: float
    rhythm_accuracy: float


class AnalyticsData(BaseModel):

    user_id: str

    multitasking_threshold: int

    stress_patterns: List[StressPattern]

    attention_collapses: List[AttentionCollapse]

    performance_trend: PerformanceTrend

    ai_adaptation_score: float

    created_at: datetime = datetime.utcnow()