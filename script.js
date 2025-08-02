  // Mock API functions
        const mockAPI = {
            getUserData: () => {
                return {
                    name: "Abhinav Kumar",
                    referralCode: "ABHINAV2025",
                    donationsRaised: 1850,
                    rewardsEarned: 4,
                    goal: 3000,
                    avatar: "profile.jpg" // Path to the profile image
                };
            },
            
            getLeaderboard: () => {
                return [
                    { rank: 1, name: "Taylor Smith", referrals: 42, raised: 3200, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3195f923-0251-492e-8a01-a034ba2734dc.png" },
                    { rank: 2, name: "Jordan Lee", referrals: 38, raised: 2900, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7eecd7c7-0e4a-4cdf-966e-efc461d919e4.png" },
                    { rank: 3, name: "Abhinav Kumar", referrals: 24, raised: 1850, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e9ff28a-b1f5-4a9e-9f3b-4a08c7920b66.png" },
                    { rank: 4, name: "Casey Wilson", referrals: 19, raised: 1750, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4975b97-b1b0-466b-a868-9e9ba4ad45a3.png" },
                    { rank: 5, name: "Riley Brown", referrals: 15, raised: 1420, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ff5bb21-dca3-47cf-a9fe-12c6fe36e76f.png" },
                    { rank: 6, name: "Morgan Taylor", referrals: 12, raised: 1150, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/053a2510-30ce-4c9c-80f9-53dbc515488f.png" },
                    { rank: 7, name: "Jamie Campbell", referrals: 8, raised: 890, avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d67016c5-25d1-4fee-9c3d-c9c37301280a.png" }
                ];
            }
        };
        
        // DOM Elements
        const loginBtn = document.getElementById('login-btn');
        const signupBtn = document.getElementById('signup-btn');
        const loginModal = document.getElementById('login-modal');
        const signupModal = document.getElementById('signup-modal');
        const closeButtons = document.querySelectorAll('.close-modal');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        
        // Modal functions
        function openModal(modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Event Listeners
        loginBtn.addEventListener('click', () => openModal(loginModal));
        signupBtn.addEventListener('click', () => openModal(signupModal));
        
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                closeModal(modal);
            });
        });
        
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality would be implemented here in a real application');
            closeModal(loginModal);
        });
        
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Signup functionality would be implemented here in a real application');
            closeModal(signupModal);
        });
        
        // Initialize dashboard
        function initDashboard() {
            const userData = mockAPI.getUserData();
            const leaderboardData = mockAPI.getLeaderboard();
            
            // Set user data
            document.getElementById('user-name').textContent = userData.name;
            document.getElementById('user-avatar').src = userData.avatar;
            document.getElementById('referral-code').textContent = userData.referralCode;
            document.getElementById('total-referrals').textContent = Math.floor(userData.donationsRaised / 50); // Just a mock calculation
            document.getElementById('donations-raised').textContent = `$${userData.donationsRaised.toLocaleString()}`;
            document.getElementById('rewards-earned').textContent = userData.rewardsEarned;
            
            // Set progress bar
            const progress = (userData.donationsRaised / userData.goal) * 100;
            document.querySelector('.progress').style.width = `${progress}%`;
            document.querySelector('.progress-text span:first-child').textContent = `Raised: $${userData.donationsRaised.toLocaleString()}`;
            document.querySelector('.progress-text span:last-child').textContent = `Goal: $${userData.goal.toLocaleString()}`;
            
            // Populate leaderboard
            const leaderboardTable = document.getElementById('leaderboard-data');
            leaderboardData.forEach(user => {
                const row = document.createElement('tr');
                if (user.name === "Abhinav Kumar") {
                    row.classList.add('highlight');
                }
                row.innerHTML = `
                    <td class="rank">${user.rank}</td>
                    <td><img src="${user.avatar}" alt="Profile picture of ${user.name}" class="avatar"> ${user.name}</td>
                    <td>${user.referrals}</td>
                    <td>$${user.raised.toLocaleString()}</td>
                `;
                leaderboardTable.appendChild(row);
            });
        }
        
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initDashboard);
