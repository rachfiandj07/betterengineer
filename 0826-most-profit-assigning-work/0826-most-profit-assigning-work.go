func maxProfitAssignment(difficulty []int, profit []int, worker []int) int {
    n := len(difficulty)

    jobs := make([][2]int, n)

    for i := 0; i< n; i++ {
        jobs[i] = [2]int{difficulty[i], profit[i]}
    }

    sort.Slice(jobs, func(i, j int) bool {
        return jobs[i][0] < jobs[j][0]
    })

    sort.Ints(worker)

    ans := 0
    maxProfits := 0
    wi := 0

    for _, w := range worker {
        for ; wi < n && jobs[wi][0] <= w; wi++ {
            if jobs[wi][1] > maxProfits {
                maxProfits = jobs[wi][1]
            }
        }
        ans += maxProfits
    }

    return ans
}