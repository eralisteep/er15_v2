import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DISCIPLINES_ROUTE } from "../utils/consts";

export function DisciplineList() {
    const [disciplines, setDisciplines] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const handleDisciplineClick = (name) => {
        history.push(`${DISCIPLINES_ROUTE}/${name}`);
    };

    useEffect(() => {
        // Загрузка данных
        fetch("http://localhost:3000/countries")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    // Собираем все дисциплины и убираем дубликаты
                    const allDisciplines = data.flatMap((country) => country.disciplines || []);
                    const uniqueDisciplines = Array.from(
                        new Map(
                            allDisciplines.map((discipline) => [discipline.name, discipline])
                        ).values()
                    );
                    setDisciplines(uniqueDisciplines);
                } else {
                    console.error("Неверный формат данных:", data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка загрузки:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (disciplines.length === 0) {
        return <div>Нет дисциплин для отображения</div>;
    }

    return (
        <Col className="disciplines">
            {disciplines.map((discipline, index) => (
                <div
                    className="i"
                    onClick={() => handleDisciplineClick(discipline.name)}
                    key={index}
                >
                    <img
                        className="flag"
                        src={`/images/disciplines/${discipline.name.replace(" ","")}.svg`}
                        alt={discipline.name}
                    />
                    {discipline.name}
                </div>
            ))}
        </Col>
    );
}
