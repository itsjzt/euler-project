(defn divisible-by? [divisor, quotient]
    (= (rem divisor quotient) 0)
)

(defn solve [end]
    (loop [start 0 sum 0]
        (if (>= start end) 
            sum 
            (if (or (divisible-by? start 3) (divisible-by? start 5))
                (recur (inc start) (+ sum start))
                (recur (inc start) sum)
            )
        ) 
    )
)

(println (solve 1000))